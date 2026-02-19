import { test, expect } from '@playwright/test';

test('navigation from HippoRAG through 4 ontology pages to Progressive Map', async ({ page }) => {
  await page.goto('/03-graph-rag/hipporag');
  // HippoRAG next should go to Ontology
  const nextLink1 = page.locator('.page-nav-next');
  await nextLink1.click();
  await expect(page).toHaveURL(/04-rag-ontology\/ontology/);
  await expect(page.locator('h1')).toContainText('Ontology');

  // Ontology next should go to Competency Questions
  const nextLink2 = page.locator('.page-nav-next');
  await nextLink2.click();
  await expect(page).toHaveURL(/competency-questions/);
  await expect(page.locator('h1')).toContainText('Competency Questions');

  // CQ next should go to RAG Ontology Map
  const nextLink3 = page.locator('.page-nav-next');
  await nextLink3.click();
  await expect(page).toHaveURL(/rag-ontology-map/);
  await expect(page.locator('h1')).toContainText('RAG Ontology Map');

  // Ontology Map next should go to Foundational Ontologies
  const nextLink4 = page.locator('.page-nav-next');
  await nextLink4.click();
  await expect(page).toHaveURL(/foundational-ontologies/);
  await expect(page.locator('h1')).toContainText('Foundational Ontologies');

  // Foundational Ontologies next should go to Progressive Map
  const nextLink5 = page.locator('.page-nav-next');
  await nextLink5.click();
  await expect(page).toHaveURL(/progressive-map/);
});

test('sidebar shows 3 pages in graph-rag section', async ({ page }) => {
  await page.goto('/03-graph-rag/graphrag');
  const graphRagSection = page.locator('details.nav-section', { has: page.locator('text=Graph-Based RAG') });
  const links = graphRagSection.locator('.nav-link');
  await expect(links).toHaveCount(3);
});

test('sidebar shows 4 pages in rag-ontology section', async ({ page }) => {
  await page.goto('/04-rag-ontology/ontology');
  const ragOntologySection = page.locator('details.nav-section', { has: page.locator('text=RAG Ontology') });
  const links = ragOntologySection.locator('.nav-link');
  await expect(links).toHaveCount(4);
});
