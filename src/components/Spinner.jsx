import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './SpinnerStyles.js'

const withSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner
}

export default withSpinner;