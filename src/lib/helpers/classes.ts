/**
  utility fn() to format classNames by removing whitespaces
*/
export default function fc(classNames: string) {
  return classNames.replace(/[\s]+/g, " ").trim();
}
