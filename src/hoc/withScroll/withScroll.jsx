import React from 'react';

export default function withScroll(WrappedComponent) {
  return class WithScroll extends React.Component {
    constructor() {
      super();

      this.myRef = React.createRef();
    }

    componentDidMount() {
      this.myRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
      console.log(this.myRef.current.scrollIntoView());
    }

    componentWillUpdate() {
      this.myRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
      console.log(this.myRef.current.scrollIntoView());
    }

    render() {
      return (
        <div className="with-scroll-component">
          <div>
            <WrappedComponent {...this.props} />
          </div>
          <div ref={this.myRef} />
        </div>
      );
    }
  };
}
