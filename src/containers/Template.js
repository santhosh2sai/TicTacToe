import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavDrawer from '../components/NavDrawer';
import {Header,Main} from '../styled/Template';

injectTapEventPlugin()

export default class Template extends Component {

    render() {
        return (
          <MuiThemeProvider>
            <div >

              <NavDrawer />
              <Header >
                Home
              </Header>
              <Main>
              {this.props.children}
              </Main>
            </div>
            </MuiThemeProvider>
        );
    }
}
