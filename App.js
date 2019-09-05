import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Authors from './src/screens/authors';
import Gallery from './src/screens/gallery';

const navigator = createStackNavigator(
  {
    Authors: Authors,
    Gallery: Gallery
  },
  {
    initialRouteName: 'Authors',
    defaultNavigationOptions: {
      title: 'Authors'
    }
  }
);

export default createAppContainer(navigator);