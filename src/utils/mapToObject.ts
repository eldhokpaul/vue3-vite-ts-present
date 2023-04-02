export default function mapToObject(arr: {models: Object[]}, key = 'name') {
  return arr.models.reduce(
    (prev, curr: Record<string, any>) => ({ ...prev, [curr[key]]: curr }),
    {},
  );
}
