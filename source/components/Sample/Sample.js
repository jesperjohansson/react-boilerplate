import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sampleActions } from '../../actions'

const Sample = props => (
  <Fragment>
    Sample is {!props.isToggled && 'not'} toggled
    <button type="button" onClick={() => props.toggle()}>
      Toggle
    </button>
  </Fragment>
)

Sample.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isToggled: state.sample.isToggled,
})

const mapDispatchToProps = dispatch => ({
  toggle: bindActionCreators(sampleActions.toggle, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
