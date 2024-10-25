export function array(value: any): asserts value is Array<any> {
  if (!Array.isArray(value)) {
    throw new Error("Value is not an array");
  }
}
export function object(value: any): asserts value is { [key: string]: any } {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Value is not an non-array object");
  }
}

export function string(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Value is not a string");
  }
}

export function number(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Value is not a number");
  }
}

export function boolean(value: any): asserts value is boolean {
  if (value !== true && value !== false) {
    throw new Error("Value is not a boolean");
  }
}
