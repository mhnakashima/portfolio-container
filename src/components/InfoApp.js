import { mount } from 'info/InfoApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <aside role='presentation' className='info' ref={ref} />
}
