# MediaProvider

Exposes the MediaProvider component, MediaContext, and useMedia hook!

You can use the useMedia hook w/ or without the MediaProvider, but you have to be explicit in doing so.

The advantage of using the provider is that you'll only have on resize listener if multiple components are using the hook. However, the advantage of the hook is that if only one component uses it, you will remove the resize listener when that component unmounts. It's a generally trivial difference, but something to consider.

*Note*: useMedia can now fallback to adding a resize listener if a provider isn't available. This is mostly useful for styleguide components that need useMedia, but don't want to impact performance by adding a listener. When consumed in the main app, they will consume the MediaProvider's context.

----
### Usage


MediaProvider:
```
import { MediaProvider } from '@codeparticle/whitelabelwallet.styleguide';

return (
  <MediaProvider>
    <App />
  </MediaProvider>
);
```

If you don't want to use the provider, pass false to useMedia:

```
const media = useMedia(false); // Does not require MediaProvider in parent tree
```

----
### Examples

```

  1: const media = useMedia(); // Uses the MediaProvider context

  2: const { isMobile } = useMedia();

  3: const isTablet = useMedia().isTablet;

  ```