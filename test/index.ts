import test from 'tape'

import { jsonParse, jsonStringify } from '../src/'

test('parse', (t) => {
  t.deepEqual(
    jsonParse('{"a":{"b":["c"]}}'),
    { a: { b: ['c'] } },
    'should parse')
  t.end()
})

test('stringify', (t) => {
  t.equal(
    jsonStringify({ a: { b: ['c'] } }),
    '{"a":{"b":["c"]}}',
    'should stringify'
  )
  t.end()
})
