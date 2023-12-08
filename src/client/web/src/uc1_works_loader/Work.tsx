import {work_styles} from '../../../common/uc1_works_loader';

export function Work({text = ''}) {
  return (
    <div style={work_styles.container}>
      <div style={work_styles.box}>
        <div style={work_styles.text}>{text}</div>
      </div>
    </div>
  );
}
