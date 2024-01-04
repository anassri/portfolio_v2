export function scrollToElement(id: string, headerOffset = 30) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  // Determine offset position by adding element position with pageYOffset and subtracting the fixed header offset
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  const supportsNativeSmoothScroll =
    "scrollBehavior" in document.documentElement.style;

  // Check is "behavior: smooth" is supported by the browser
  if (supportsNativeSmoothScroll) {
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  } else {
    window.scrollTo(0, offsetPosition);
  }
}

export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};
