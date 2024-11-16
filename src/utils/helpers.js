export function setButtonText(
  button,
  isLoading,
  loadingText = "Saving...",
  defaultText = "Save"
) {
  if (isLoading) {
    button.textContent = loadingText;
    console.log(`Setting text to ${loadingText}`);
  } else {
    button.textContent = defaultText;
  }
}
