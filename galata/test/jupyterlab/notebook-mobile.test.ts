// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test } from '@jupyterlab/galata';

import { expect } from '@playwright/test';

const fileName = 'notebook.ipynb';

test.use({ viewport: { width: 512, height: 768 } });

test.describe('Notebook Layout on Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.notebook.createNew(fileName);
  });

  test('Execute code cell', async ({ page }) => {
    await page.sidebar.close('left');
    await page.notebook.setCell(0, 'code', 'print("hello")');
    await page.notebook.addCell('code', '2 * 3');
    await page.notebook.runCellByCell();
    const nbPanel = await page.notebook.getNotebookInPanel();
    const imageName = 'mobile-layout.png';
    expect(await nbPanel.screenshot()).toMatchSnapshot(imageName);
  });
});
