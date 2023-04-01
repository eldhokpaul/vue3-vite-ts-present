export default function mapToObject(arr: any, key = 'name') {
  return arr.models.reduce(
    (prev: any, curr: Record<string, any>) => ({ ...prev, [curr[key]]: curr }),
    {},
  );
}
