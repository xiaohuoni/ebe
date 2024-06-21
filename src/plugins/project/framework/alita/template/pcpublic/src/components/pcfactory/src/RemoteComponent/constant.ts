import FishRender from './components/FishRender';
import ReactRender from './components/ReactRender';
import VueRender from './components/VueRender';

export const RemoteComponentMap = {
  React: ReactRender,
  Vue: VueRender,
  Fish: FishRender,
};
