import Counter from 'components/Counter';
import * as actions from 'actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple' ];

    const random = Math.floor(Math.random() * 7);

    return colors[random];
}

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numData.number
});

const mapDispatchToProps  = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;