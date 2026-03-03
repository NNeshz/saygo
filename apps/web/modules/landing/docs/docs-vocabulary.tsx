"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconBook,
  IconVolume,
  IconSearch,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saygo/ui/src/components/accordion";
import { cn } from "@saygo/ui/src/lib/utils";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  vocabularyCategories,
  type VocabularyCategory,
  type VocabularyItem,
} from "./vocabulary-data";

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function VocabularyCard({
  item,
  index,
}: {
  item: VocabularyItem;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className="group relative rounded-2xl border border-border bg-card p-4 md:p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
    >
      {/* Word & Phonetic */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h4 className="font-semibold text-base md:text-lg text-foreground leading-tight">
            {item.word}
          </h4>
          <span className="text-xs text-muted-foreground font-mono mt-0.5 inline-flex items-center gap-1">
            <IconVolume className="w-3 h-3 opacity-50" />
            {item.phonetic}
          </span>
        </div>
        <span className="shrink-0 rounded-lg bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium">
          {item.translation}
        </span>
      </div>

      {/* Example */}
      <div className="mt-3 pt-3 border-t border-border/50">
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{item.example}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

function CategorySelector({
  categories,
  activeId,
  onSelect,
}: {
  categories: VocabularyCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const active = categories.find((c) => c.id === activeId);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between gap-3 px-5 py-3.5",
          "rounded-2xl border border-border bg-card",
          "text-left transition-all duration-200",
          "hover:shadow-md hover:border-primary/30",
          isOpen && "shadow-md border-primary/30",
        )}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{active?.icon}</span>
          <div>
            <div className="font-medium text-foreground text-sm">
              {active?.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {active?.subCategories.length} sub-categorías
            </div>
          </div>
        </div>
        <IconChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute z-30 top-full mt-2 w-full rounded-2xl border border-border bg-card shadow-xl overflow-hidden"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelect(cat.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors",
                  "hover:bg-muted/50",
                  cat.id === activeId && "bg-primary/5",
                )}
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {cat.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cat.description}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Buscar palabra..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full pl-11 pr-4 py-3 rounded-xl",
          "border border-border bg-card text-foreground",
          "placeholder:text-muted-foreground text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
          "transition-all duration-200",
        )}
      />
    </div>
  );
}

export function DocsVocabulary() {
  const [activeCategoryId, setActiveCategoryId] = React.useState(
    vocabularyCategories[0].id,
  );
  const [search, setSearch] = React.useState("");
  const activeCategory = vocabularyCategories.find(
    (c) => c.id === activeCategoryId,
  )!;

  // Filter sub-categories and items by search
  const filteredSubCategories = activeCategory.subCategories
    .map((sub) => ({
      ...sub,
      items: sub.items.filter(
        (item) =>
          !search ||
          item.word.toLowerCase().includes(search.toLowerCase()) ||
          item.translation.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((sub) => sub.items.length > 0);

  const totalWords = activeCategory.subCategories.reduce(
    (acc, sub) => acc + sub.items.length,
    0,
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-28 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-citrus-zest/5 rounded-full blur-3xl" />
        </div>

        <MaxWidth className="relative z-10 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            <IconBook className="w-4 h-4" />
            Documentación
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Vocabulario
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}
            className="text-base md:text-lg text-muted-foreground max-w-lg"
          >
            Explora y aprende vocabulario organizado por categorías. Cada
            palabra incluye su pronunciación, traducción y ejemplo de uso.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={3}
            className="flex items-center gap-6 text-sm text-muted-foreground mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-citrus-zest" />
              <span>
                <strong className="text-foreground">{totalWords}</strong>{" "}
                palabras
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sea-breeze" />
              <span>
                <strong className="text-foreground">
                  {activeCategory.subCategories.length}
                </strong>{" "}
                sub-categorías
              </span>
            </div>
          </motion.div>
        </MaxWidth>
      </section>

      {/* Controls Section */}
      <section className="w-full px-6 pb-8">
        <MaxWidth className="flex flex-col items-center gap-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={4}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CategorySelector
              categories={vocabularyCategories}
              activeId={activeCategoryId}
              onSelect={(id) => {
                setActiveCategoryId(id);
                setSearch("");
              }}
            />
            <SearchBar value={search} onChange={setSearch} />
          </motion.div>
        </MaxWidth>
      </section>

      {/* Vocabulary Accordions */}
      <section className="w-full px-6 pb-24">
        <MaxWidth className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSubCategories.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No se encontraron resultados para &ldquo;{search}&rdquo;
                  </p>
                </div>
              ) : (
                <Accordion
                  defaultValue={[filteredSubCategories[0]?.name]}
                  className="w-full space-y-3"
                >
                  {filteredSubCategories.map((subCat, subIdx) => (
                    <motion.div
                      key={subCat.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeIn}
                      custom={subIdx}
                    >
                      <AccordionItem
                        value={subCat.name}
                        className="border-none"
                      >
                        <AccordionTrigger className="w-full rounded-2xl bg-muted px-5 md:px-6 py-4 text-left hover:no-underline hover:bg-muted/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-xl md:text-2xl">
                              {subCat.emoji}
                            </span>
                            <div>
                              <span className="font-semibold text-base md:text-lg">
                                {subCat.name}
                              </span>
                              <span className="ml-2 text-xs text-muted-foreground">
                                ({subCat.items.length} palabras)
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-1 pt-4 pb-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {subCat.items.map((item, itemIdx) => (
                              <VocabularyCard
                                key={item.word}
                                item={item}
                                index={itemIdx}
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              )}
            </motion.div>
          </AnimatePresence>
        </MaxWidth>
      </section>
    </div>
  );
}
