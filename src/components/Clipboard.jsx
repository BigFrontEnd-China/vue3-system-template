/**
 *@Description:描述
 *@Author: Jackson
 *@CreateTime: 2023年03月23日 15:43:50
 *@UpdateTime:
 **/

import ClipboardJS from 'clipboard';
export default {
  name: 'Clipboard',
  props: {
    tag: {
      type: [String],
      default: 'span'
    },
    // 选取内容的上下文， 与container 一致
    context: {
      type: [String, Function],
      default: ''
    },
    // 是否允许清楚选中
    clearSelectionAbled: {
      type: [Boolean],
      default: false
    },
    // 目标元素
    target: {
      type: [String, Function]
    },
    // 内容
    text: {
      type: [String, Function],
      default: ''
    },
    // 触发方式
    action: {
      type: [String, Function],
      default: 'copy',
      validator(val) {
        return (
          typeof val === 'function' ||
          ['copy', 'cut'].some((item) => item === val)
        );
      }
    }
  },
  computed: {
    clipTarget() {
      return typeof this.target === 'function'
        ? this.target
        : () => this.target;
    },
    clipAction() {
      return typeof this.action === 'function'
        ? this.action
        : () => this.action;
    },
    clipContext() {
      return typeof this.context === 'function'
        ? this.context
        : () => this.context;
    },
    clipText() {
      return typeof this.text === 'function' ? this.text : () => this.text;
    }
  },
  beforeUnmount() {
    this.destroy();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.clipboard = new ClipboardJS(this.$el, {
          action: this.clipAction,
          target: this.clipTarget,
          text: this.clipText,
          container: this.clipContext
        });
        this.clipboard.on('success', (e) => {
          this.$emit('onSuccess', e);
          this.clearSelectionAbled && e.clearSelection();
        });
        this.clipboard.on('error', (e) => {
          this.$emit('onSuccess', e);
          this.clearSelectionAbled && e.clearSelection();
        });
      });
    },
    destroy() {
      this.clipboard && this.clipboard.destroy();
    }
  },
  render() {
    const { tag, $slots } = this;
    return <tag role="clipboard">{$slots.default()}</tag>;
  }
};
