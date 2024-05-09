import {A2AView} from '../../../common/components/A2AView';
import {work_styles} from '../../../common/uc1_works_loader';

export function Work({text = ''}) {
  return (
    <A2AView style={work_styles.container}>
      <A2AView
        style={{
          ...work_styles.box,
          backgroundColor: 'yellow',
        }}>
        <A2AView style={work_styles.text}>{text}</A2AView>
      </A2AView>
    </A2AView>
  );
}
