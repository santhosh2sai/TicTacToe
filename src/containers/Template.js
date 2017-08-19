import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin()

export default class Template extends Component {

    render() {
        return (
          <MuiThemeProvider>
            <div >
              <header>
              <h1>TicTacToe! By Sam</h1>
              <RaisedButton label={'test-button'}
              primary={true}
              onTouchTap={()=>{console.log('button works')}}
              />
              </header>
              <main>
              {this.props.children}
              </main>
            </div>
            </MuiThemeProvider>
        );
    }
}
