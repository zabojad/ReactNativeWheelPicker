/**
 * @prettier
 * @flow
 * */

import React from 'react'
import { requireNativeComponent } from 'react-native'

const WheelPickerView = requireNativeComponent('WheelPicker', null)

type Props = {
  onItemSelected: any => void,
  data: Array<any>,
  isCurved?: boolean,
  isCyclic?: boolean,
  isAtmospheric?: boolean,
  selectedItemTextColor?: string,
  itemSpace?: number,
  visibleItemCount?: number,
  renderIndicator?: boolean,
  indicatorColor?: string,
  indicatorThickness?: number,
  isCurtain?: boolean,
  curtainColor?: string,
  itemTextColor?: string,
  itemTextSize?: number,
  itemTextFontFamily?: string,
  selectedItemPosition?: number,
  backgroundColor?: string,
}

type State = { selectedItemPosition: number }

export default class WheelPicker extends React.Component<Props, State> {
  state = {
    selectedItemPosition: 0,
  }

  static defaultProps = {
    style: {
      width: 200,
      height: 150,
    },
  }

  onItemSelected = (event: any) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(event.nativeEvent)
    }
  }

  componentDidMount() {
    // note, added timeout because it did not work with latest WheelPicker version without it...
    setTimeout(()=>this.setState({ selectedItemPosition: this.props.selectedItemPosition }), 100);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ selectedItemPosition: nextProps.selectedItemPosition })
  }

  render() {
    return (
      <WheelPickerView
        {...this.props}
        onChange={this.onItemSelected}
        selectedItemPosition={this.state.selectedItemPosition}
      />
    )
  }
}
