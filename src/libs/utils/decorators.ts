/**
 * @autobind
 */
export function autobind(_: any, context: ClassMethodDecoratorContext) {
  const methodeName = context.name;

  if (context.kind !== 'method') {
    throw new Error(
      `@autobind can only be used on a methode. Error on ${String(methodeName)}`
    );
  }

  context.addInitializer(function (this: any) {
    this[methodeName] = this[methodeName].bind(this);
  });
}
