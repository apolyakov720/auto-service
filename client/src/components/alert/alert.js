import React from "react"; // чтобы писать разметку в .js
import { CSSUtils } from '@utils';
import Icon from "@components/icon";

const Alert = ({ content, type }) => {
  const alertClass = CSSUtils.mergeModifiers('alert', {
    [type]: type,
  })
  return (
    <div className={alertClass}>
      <div className="alert__content">{content}</div>
      <Icon source={Icon.sources.base.cross} />
    </div>
  )

}
export default Alert