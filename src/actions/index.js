import React from 'react';

export default () => {
    return {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleTimeString()
    }
}