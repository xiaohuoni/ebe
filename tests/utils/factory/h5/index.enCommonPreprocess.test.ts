import h5 from '../../../../src/utils/factory/h5/index.enCommonPreprocess';

describe('h5 component preprocess', () => {
  describe('Button', () => {
    test('should set btnIcon to true if icontype is present', () => {
      const component = h5.Button({
        props: {
          icontype: {
            some: '???',
          },
        },
      });
      expect(component.props.btnIcon).toBe(true);
    });

    test('should set btnIcon to false if icontype is empty', () => {
      const component = h5.Button({ props: { icontype: {} } });
      expect(component.props.btnIcon).toBe(false);
    });

    test('should set children to props name', () => {
      const component = h5.Button({ props: { name: '按钮' } });
      expect(component.props.children).toBe('按钮');
    });

    test('should set status to 3 if disabled is true', () => {
      const component = h5.Button({ props: { disabled: true } });
      expect(component.props.status).toBe('3');
    });

    test('should set status to 1 if disabled is false', () => {
      const component = h5.Button({ props: { disabled: false } });
      expect(component.props.status).toBe('1');
    });
  });

  describe('Icon', () => {
    test('should set icon to props type', () => {
      const component = h5.Icon({ props: { type: { some: '???' } } });
      expect(component.props.icon.some).toBe('???');
    });
    test('should set status to props state', () => {
      const component = h5.Icon({ props: { state: '1' } });
      expect(component.props.status).toBe('1');
    });
  });

  describe('Divider', () => {
    test('should set visible to props status', () => {
      const component = h5.Divider({ props: { status: true } });
      expect(component.props.visible).toBe(true);
    });
  });

  describe('DatePicker|Calendar|Picker', () => {
    test('should set visible to false if not present', () => {
      const component = h5['DatePicker|Calendar|Picker']({ props: {} });
      expect(component.props.visible).toBe(false);
    });
  });

  describe('DMultiplePicker', () => {
    test('should set max to the minimum of max and maxValueLength', () => {
      const component = h5.DMultiplePicker({
        props: { max: 5, maxValueLength: 10 },
      });
      expect(component.props.max).toBe(5);
    });
  });

  describe('DformDate', () => {
    test('should set defaultValue based on isCurrent and customTime', () => {
      const component = h5.DformDate({
        props: {
          isCurrent: true,
          defaultValue: 'default',
          customTime: 'custom',
        },
      });
      expect(component.props.defaultValue).toEqual({
        isCurrent: true,
        defaultValue: 'default',
        customTime: 'custom',
        type: 'isCurrent',
      });
    });
  });

  describe('DMultiplePicker|DformDate|DformInput|DformSelect|DformPicker', () => {
    test('should remove unnecessary props', () => {
      const component = h5[
        'DMultiplePicker|DformDate|DformInput|DformSelect|DformPicker'
      ]({
        props: {
          type: 'type',
          theme: 'theme',
          fontAddress: 'fontAddress',
          isIconFont: true,
          iconFileInfo: 'iconFileInfo',
          svgContent: 'svgContent',
          iconFile: 'iconFile',
        },
      });
      expect(component.props).toEqual({});
    });
  });

  describe('DformFile', () => {
    test('should set uploadAccepType.accept and uploadAccepType.acceptExtension based on accept and acceptExtension', () => {
      const component = h5.DformFile({
        props: { accept: 'image/jpeg', acceptExtension: '.jpg' },
      });
      expect(component.props.uploadAccepType).toEqual({
        accept: 'image/jpeg',
        acceptExtension: '.jpg',
      });
    });

    test('should convert singleFileMaxSize to string if it is a number', () => {
      const component = h5.DformFile({ props: { singleFileMaxSize: 10 } });
      expect(component.props.singleFileMaxSize).toBe('10MB');
    });
  });

  describe('DformInput|Input', () => {
    test('should update the ID card regexp pattern', () => {
      const component = h5['DformInput|Input']({
        props: {
          regexp: [
            {
              pattern:
                '/^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[12])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$/',
            },
          ],
        },
      });
      expect(component.props.regexp[0].pattern).toBe(
        '/^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$/',
      );
    });
  });

  describe('Accordion|Animation|Audio|BlockSelect|Card|DForm|Donut|Loop|NoticeBarPlus|Pageview|Selector|View', () => {
    test('should set backgroundType based on style.backgroundColor', () => {
      const component = h5[
        'Accordion|Animation|Audio|BlockSelect|Card|DForm|Donut|Loop|NoticeBarPlus|Pageview|Selector|View'
      ]({
        style: { backgroundColor: '#ffffff' },
        props: {},
      });
      expect(component.props.backgroundType).toEqual({
        type: 'cleanColor',
        color: '#ffffff',
      });
    });

    test('should remove style.backgroundColor if backgroundType is already present', () => {
      const component = h5[
        'Accordion|Animation|Audio|BlockSelect|Card|DForm|Donut|Loop|NoticeBarPlus|Pageview|Selector|View'
      ]({
        style: { backgroundColor: '#ffffff' },
        props: { backgroundType: { type: 'cleanColor', color: '#ffffff' } },
      });
      expect(component.style).toEqual({});
    });
  });
});
