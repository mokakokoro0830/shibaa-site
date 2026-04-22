/** Astro 5 の content.id（例: "sample-post.md"）から URL 用スラッグを生成 */
export function getSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}
