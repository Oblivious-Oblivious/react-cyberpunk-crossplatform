import {work_styles} from '../../../common/uc1_works_loader';
import {A2AView} from '../../../common/components/A2AViewWeb';

export function Work({text = ''}) {
  return (
    <A2AView style={work_styles.container}>
      <div style={{
        ...work_styles.box,
        backgroundColor: 'yellow',
      }}>
        <div style={work_styles.text}>{text}</div>
      </div>
    </A2AView>
  );
}
