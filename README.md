# dotwatcher

## Testing

### Run Tests

```npm test```

Generate a snapshot of the rendered component and match against it. Equivalent to `jest`.

### Update Snapshot

```npm run test:updateSnapshot```

Regenerate snapshots if a component has changed since the first test. Equivalent to `jest --updateSnapshot`.

### Continuous Testing

```npm run test:watch```

Watch files and test if changed. Equivalent to `jest --watch`.