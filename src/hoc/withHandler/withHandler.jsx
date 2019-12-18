import React from 'react';

export default function withHandler(WrappedComponent) {
  return class WithHandler extends React.Component {
    render() {
      return (
        <div onClick={() => this.props.onHandler()}>
          <div>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
