import { assert } from '../util';
import { op } from './operation';
import { pad } from './pad';
/**
 * Pads a `tf.Tensor3D` with a given value and paddings. See `pad` for details.
 */
function pad3d_(x, paddings, constantValue = 0) {
    assert(paddings.length === 3 && paddings[0].length === 2 &&
        paddings[1].length === 2 && paddings[2].length === 2, () => 'Invalid number of paddings. Must be length of 2 each.');
    return pad(x, paddings, constantValue);
}
export const pad3d = op({ pad3d_ });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkM2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL29wcy9wYWQzZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUMvQixPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFMUI7O0dBRUc7QUFDSCxTQUFTLE1BQU0sQ0FDWCxDQUFzQixFQUN0QixRQUFnRSxFQUNoRSxhQUFhLEdBQUcsQ0FBQztJQUNuQixNQUFNLENBQ0YsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN4RCxHQUFHLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQ25FLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtUZW5zb3IzRH0gZnJvbSAnLi4vdGVuc29yJztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHtvcH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHtwYWR9IGZyb20gJy4vcGFkJztcblxuLyoqXG4gKiBQYWRzIGEgYHRmLlRlbnNvcjNEYCB3aXRoIGEgZ2l2ZW4gdmFsdWUgYW5kIHBhZGRpbmdzLiBTZWUgYHBhZGAgZm9yIGRldGFpbHMuXG4gKi9cbmZ1bmN0aW9uIHBhZDNkXyhcbiAgICB4OiBUZW5zb3IzRHxUZW5zb3JMaWtlLFxuICAgIHBhZGRpbmdzOiBbW251bWJlciwgbnVtYmVyXSwgW251bWJlciwgbnVtYmVyXSwgW251bWJlciwgbnVtYmVyXV0sXG4gICAgY29uc3RhbnRWYWx1ZSA9IDApOiBUZW5zb3IzRCB7XG4gIGFzc2VydChcbiAgICAgIHBhZGRpbmdzLmxlbmd0aCA9PT0gMyAmJiBwYWRkaW5nc1swXS5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICBwYWRkaW5nc1sxXS5sZW5ndGggPT09IDIgJiYgcGFkZGluZ3NbMl0ubGVuZ3RoID09PSAyLFxuICAgICAgKCkgPT4gJ0ludmFsaWQgbnVtYmVyIG9mIHBhZGRpbmdzLiBNdXN0IGJlIGxlbmd0aCBvZiAyIGVhY2guJyk7XG4gIHJldHVybiBwYWQoeCwgcGFkZGluZ3MsIGNvbnN0YW50VmFsdWUpO1xufVxuXG5leHBvcnQgY29uc3QgcGFkM2QgPSBvcCh7cGFkM2RffSk7XG4iXX0=