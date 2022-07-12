/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '../index';
import { ALL_ENVS, describeWithFlags } from '../jasmine_util';
import { expectArraysClose } from '../test_util';
describeWithFlags('sigmoid', ALL_ENVS, () => {
    it('basic', async () => {
        const values = [1, -3, 2, 7, -4];
        const a = tf.tensor1d(values);
        const result = tf.sigmoid(a);
        const expected = [];
        for (let i = 0; i < a.size; i++) {
            expected[i] = 1 / (1 + Math.exp(-values[i]));
        }
        expectArraysClose(await result.data(), expected);
    });
    it('6D', async () => {
        const a = tf.ones([2, 2, 2, 2, 2, 2]);
        const result = tf.sigmoid(a);
        const expected = [];
        for (let i = 0; i < a.size; i++) {
            expected[i] = 1 / (1 + Math.exp(-1.0));
        }
        expectArraysClose(await result.data(), expected);
    });
    it('propagates NaNs', async () => {
        const a = tf.tensor1d([3, NaN]);
        const res = tf.sigmoid(a);
        expectArraysClose(await res.data(), [1 / (1 + Math.exp(-3)), NaN]);
    });
    it('gradients: Tensor1D', async () => {
        const a = tf.tensor1d([1, 2, -3, 5]);
        const dy = tf.tensor1d([1, 2, 3, 4]);
        const da = tf.grad(a => tf.sigmoid(a))(a, dy);
        const aVals = await a.array();
        const dyVals = await dy.array();
        const expected = [];
        for (let i = 0; i < a.size; i++) {
            const y = 1 / (1 + Math.exp(-aVals[i]));
            expected[i] = dyVals[i] * y * (1 - y);
        }
        expectArraysClose(await da.data(), expected);
    });
    it('gradient with clones', async () => {
        const a = tf.tensor1d([1, 2, -3, 5]);
        const dy = tf.tensor1d([1, 2, 3, 4]);
        const da = tf.grad(a => tf.sigmoid(a.clone()).clone())(a, dy);
        const aVals = await a.array();
        const dyVals = await dy.array();
        const expected = [];
        for (let i = 0; i < a.size; i++) {
            const y = 1 / (1 + Math.exp(-aVals[i]));
            expected[i] = dyVals[i] * y * (1 - y);
        }
        expectArraysClose(await da.data(), expected);
    });
    it('throws when passed a non-tensor', () => {
        expect(() => tf.sigmoid({}))
            .toThrowError(/Argument 'x' passed to 'sigmoid' must be a Tensor/);
    });
    it('accepts a tensor-like object', async () => {
        const values = [1, -3, 2, 7, -4];
        const result = tf.sigmoid(values);
        const expected = [];
        for (let i = 0; i < values.length; i++) {
            expected[i] = 1 / (1 + Math.exp(-values[i]));
        }
        expectArraysClose(await result.data(), expected);
    });
    it('throws for string tensor', () => {
        expect(() => tf.sigmoid('q'))
            .toThrowError(/Argument 'x' passed to 'sigmoid' must be float32/);
    });
    it('throws for int32 tensor', () => {
        expect(() => tf.sigmoid(tf.tensor1d([1], 'int32')))
            .toThrowError(/Argument 'x' passed to 'sigmoid' must be float32/);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbW9pZF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvc2lnbW9pZF90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDMUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdCLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsaUJBQWlCLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxD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QUM5QyxZQUFZLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge0FMTF9FTlZTLCBkZXNjcmliZVdpdGhGbGFnc30gZnJvbSAnLi4vamFzbWluZV91dGlsJztcbmltcG9ydCB7ZXhwZWN0QXJyYXlzQ2xvc2V9IGZyb20gJy4uL3Rlc3RfdXRpbCc7XG5cbmRlc2NyaWJlV2l0aEZsYWdzKCdzaWdtb2lkJywgQUxMX0VOVlMsICgpID0+IHtcbiAgaXQoJ2Jhc2ljJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFsxLCAtMywgMiwgNywgLTRdO1xuICAgIGNvbnN0IGEgPSB0Zi50ZW5zb3IxZCh2YWx1ZXMpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gdGYuc2lnbW9pZChhKTtcblxuICAgIGNvbnN0IGV4cGVjdGVkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLnNpemU7IGkrKykge1xuICAgICAgZXhwZWN0ZWRbaV0gPSAxIC8gKDEgKyBNYXRoLmV4cCgtdmFsdWVzW2ldKSk7XG4gICAgfVxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHJlc3VsdC5kYXRhKCksIGV4cGVjdGVkKTtcbiAgfSk7XG5cbiAgaXQoJzZEJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGEgPSB0Zi5vbmVzKFsyLCAyLCAyLCAyLCAyLCAyXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGYuc2lnbW9pZChhKTtcblxuICAgIGNvbnN0IGV4cGVjdGVkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLnNpemU7IGkrKykge1xuICAgICAgZXhwZWN0ZWRbaV0gPSAxIC8gKDEgKyBNYXRoLmV4cCgtMS4wKSk7XG4gICAgfVxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHJlc3VsdC5kYXRhKCksIGV4cGVjdGVkKTtcbiAgfSk7XG5cbiAgaXQoJ3Byb3BhZ2F0ZXMgTmFOcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhID0gdGYudGVuc29yMWQoWzMsIE5hTl0pO1xuICAgIGNvbnN0IHJlcyA9IHRmLnNpZ21vaWQoYSk7XG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoYXdhaXQgcmVzLmRhdGEoKSwgWzEgLyAoMSArIE1hdGguZXhwKC0zKSksIE5hTl0pO1xuICB9KTtcblxuICBpdCgnZ3JhZGllbnRzOiBUZW5zb3IxRCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhID0gdGYudGVuc29yMWQoWzEsIDIsIC0zLCA1XSk7XG4gICAgY29uc3QgZHkgPSB0Zi50ZW5zb3IxZChbMSwgMiwgMywgNF0pO1xuXG4gICAgY29uc3QgZGEgPSB0Zi5ncmFkKGEgPT4gdGYuc2lnbW9pZChhKSkoYSwgZHkpO1xuXG4gICAgY29uc3QgYVZhbHMgPSBhd2FpdCBhLmFycmF5KCk7XG4gICAgY29uc3QgZHlWYWxzID0gYXdhaXQgZHkuYXJyYXkoKTtcbiAgICBjb25zdCBleHBlY3RlZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSAxIC8gKDEgKyBNYXRoLmV4cCgtYVZhbHNbaV0pKTtcbiAgICAgIGV4cGVjdGVkW2ldID0gZHlWYWxzW2ldICogeSAqICgxIC0geSk7XG4gICAgfVxuXG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoYXdhaXQgZGEuZGF0YSgpLCBleHBlY3RlZCk7XG4gIH0pO1xuXG4gIGl0KCdncmFkaWVudCB3aXRoIGNsb25lcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhID0gdGYudGVuc29yMWQoWzEsIDIsIC0zLCA1XSk7XG4gICAgY29uc3QgZHkgPSB0Zi50ZW5zb3IxZChbMSwgMiwgMywgNF0pO1xuXG4gICAgY29uc3QgZGEgPSB0Zi5ncmFkKGEgPT4gdGYuc2lnbW9pZChhLmNsb25lKCkpLmNsb25lKCkpKGEsIGR5KTtcblxuICAgIGNvbnN0IGFWYWxzID0gYXdhaXQgYS5hcnJheSgpO1xuICAgIGNvbnN0IGR5VmFscyA9IGF3YWl0IGR5LmFycmF5KCk7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gMSAvICgxICsgTWF0aC5leHAoLWFWYWxzW2ldKSk7XG4gICAgICBleHBlY3RlZFtpXSA9IGR5VmFsc1tpXSAqIHkgKiAoMSAtIHkpO1xuICAgIH1cblxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IGRhLmRhdGEoKSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgndGhyb3dzIHdoZW4gcGFzc2VkIGEgbm9uLXRlbnNvcicsICgpID0+IHtcbiAgICBleHBlY3QoKCkgPT4gdGYuc2lnbW9pZCh7fSBhcyB0Zi5UZW5zb3IpKVxuICAgICAgICAudG9UaHJvd0Vycm9yKC9Bcmd1bWVudCAneCcgcGFzc2VkIHRvICdzaWdtb2lkJyBtdXN0IGJlIGEgVGVuc29yLyk7XG4gIH0pO1xuXG4gIGl0KCdhY2NlcHRzIGEgdGVuc29yLWxpa2Ugb2JqZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFsxLCAtMywgMiwgNywgLTRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRmLnNpZ21vaWQodmFsdWVzKTtcblxuICAgIGNvbnN0IGV4cGVjdGVkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGV4cGVjdGVkW2ldID0gMSAvICgxICsgTWF0aC5leHAoLXZhbHVlc1tpXSkpO1xuICAgIH1cbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCByZXN1bHQuZGF0YSgpLCBleHBlY3RlZCk7XG4gIH0pO1xuXG4gIGl0KCd0aHJvd3MgZm9yIHN0cmluZyB0ZW5zb3InLCAoKSA9PiB7XG4gICAgZXhwZWN0KCgpID0+IHRmLnNpZ21vaWQoJ3EnKSlcbiAgICAgICAgLnRvVGhyb3dFcnJvcigvQXJndW1lbnQgJ3gnIHBhc3NlZCB0byAnc2lnbW9pZCcgbXVzdCBiZSBmbG9hdDMyLyk7XG4gIH0pO1xuXG4gIGl0KCd0aHJvd3MgZm9yIGludDMyIHRlbnNvcicsICgpID0+IHtcbiAgICBleHBlY3QoKCkgPT4gdGYuc2lnbW9pZCh0Zi50ZW5zb3IxZChbMV0sICdpbnQzMicpKSlcbiAgICAgICAgLnRvVGhyb3dFcnJvcigvQXJndW1lbnQgJ3gnIHBhc3NlZCB0byAnc2lnbW9pZCcgbXVzdCBiZSBmbG9hdDMyLyk7XG4gIH0pO1xufSk7XG4iXX0=