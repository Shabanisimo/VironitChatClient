import React from 'react';

export default function withScroll(WrappedComponent) {
  return class WithScroll extends React.Component {
    constructor() {
      super();

      this.myRef = React.createRef();
    }

    componentDidMount() {
      this.myRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }

    componentDidUpdate() {
      this.myRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }

    render() {
      return (
        <div className="with-scroll-component">
          <div ref={this.myRef} />
          <div>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
