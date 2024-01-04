import React, {
  EventHandler,
  FocusEventHandler,
  FunctionComponent,
  SyntheticEvent,
} from "react";

export type ClickableElementProps = {
  onBlur?: FocusEventHandler<HTMLDivElement>;
  ariaLabel?: string;
  children?: string | JSX.Element | string[];
  id?: string;
  onClick: EventHandler<SyntheticEvent<HTMLDivElement>>;
  disabled?: boolean;
  tabIndex?: 0 | -1;
  className?: string;
};

export const ClickableElement: FunctionComponent<ClickableElementProps> = ({
  ariaLabel,
  children,
  id,
  onClick,
  onBlur,
  disabled,
  tabIndex = 0,
  className,
}) => {
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => onClick(evt);

  const keyHandler = (evt: React.KeyboardEvent<HTMLDivElement>) => onClick(evt);
  return (
    <div
      role="button"
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`${disabled ? "" : "cursor-pointer"} ${className}`}
      onClick={clickHandler}
      onKeyDown={keyHandler}
      onBlur={onBlur}
      id={id}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
};

export type MaybeClickableProps = {
  link?: string | null;
  children: React.ReactNode;
} & ClickableElementProps;

export const MaybeClickable: FunctionComponent<MaybeClickableProps> = ({
  link,
  children,
  ...rest
}) => {
  return link ? (
    <ClickableElement {...rest}>{children}</ClickableElement>
  ) : (
    <div className={rest.className}>{children}</div>
  );
};
