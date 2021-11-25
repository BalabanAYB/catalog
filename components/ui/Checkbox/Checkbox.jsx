import {FC, useState} from 'react';
import clsx from 'clsx';

import styles from './Checkbox.module.scss';
import {useEffect} from 'react';


const Checkbox = ({
                      defaultChecked,
                      register,
                      onChange,
                      className,
                      value,
                      label,
                      name,
                  }) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onChangeHandle = () => {
        setChecked(!checked);
        const checkbox = {checked: !checked, type: 'checkbox', name: name, value: value}
        if (!!onChange) onChange(checkbox);
    };

    useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);

    return (
        <label
            className={clsx(styles.root,
                className, {
                    [styles.checked]: checked,
                })}
        >
            <input
                className={styles.input}
                type="checkbox"
                name={name}
                onChange={onChangeHandle}
                ref={register}
            />
            <span className={styles.checkbox}/>
            {!!label && (
                <span className={clsx(styles.label)}>
          {label}
        </span>
            )}
        </label>
    );
};

export default Checkbox;
