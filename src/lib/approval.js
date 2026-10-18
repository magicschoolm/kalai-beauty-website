/**
 * ============================================================================
 * src/lib/approval.js  —  THE "IS IT OK TO PUBLISH?" SAFETY SWITCH
 * ----------------------------------------------------------------------------
 * Photos and details sometimes need the business owner's approval before they
 * can go live. This tiny file decides, at build time, whether we are building
 * a real site ("production") or a draft preview.
 *
 * HOW TO SWITCH
 *   - Normal `npm run build`              -> production (only approved items)
 *   - `VITE_BUILD_MODE=preview npm run build` -> preview (also shows drafts)
 *
 * You will almost never need to touch this file.
 * ============================================================================
 */

/**
 * `import.meta.env.PROD` is a Vite value: true in a real build, false while
 * developing. `VITE_BUILD_MODE` lets you force preview mode when needed.
 */
const forcedPreview = import.meta.env.VITE_BUILD_MODE === "preview";

export const isProduction = import.meta.env.PROD && !forcedPreview;

/**
 * Should this item be shown to visitors?
 *   approved === true  -> yes, in both preview and production.
 *   approved === false -> only in preview builds (so you can review it).
 */
export function canRender(approved) {
  if (isProduction) return approved === true;
  return true;
}
