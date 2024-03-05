const {
  DefaultEventPriority,
} = require("react-reconciler/constants");

const HostConfig = {
  getRootHostContext(rootContainer) {
    console.log("getRootHostContext");
  },

  prepareForCommit(containerInfo) {
    console.log("prepareForCommit");
  },

  resetAfterCommit(containerInfo) {
    console.log("resetAfterCommit");
  },

  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    console.log("createInstance: ", {
      type,
      props,
      // rootContainer,
      // hostContext,
      // internalHandle,
    });

    return {
      type,
      props,
    };
  },

  createTextInstance(text, rootContainer, hostContext, internalHandle) {
    console.log("createTextInstance: ", {
      text,
      // rootContainer,
      // hostContext,
      // internalHandle,
    });
  },

  appendInitialChild(parentInstance, child) {},

  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    console.log("finalizeInitialChildren: ", {
      instance,
      type,
      // props,
      // rootContainer,
      // hostContext,
    });
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainer,
    hostContext
  ) {
    console.log("prepareUpdate", {
      instance,
      type,
      // oldProps,
      // newProps,
      // rootContainer,
      // hostContext,
    });
  },

  shouldSetTextContent(type, props) {
    console.log("shouldSetTextContent: ", { type, props });
    return true;
  },

  getChildHostContext(parentHostContext, type, rootContainer) {
    console.log("getChildHostContext");
  },

  getPublicInstance() {
    console.log("getPublicInstance");
  },

  // preparePortalMount(containerInfo) {},

  noTimeout: -1,

  scheduleTimeout(fn, delay) {
    console.log("scheduleTimeout");
    return setTimeout(fn, delay);
  },

  cancelTimeout(id) {
    console.log("cancelTimeout");
    return clearTimeout(id);
  },

  // supportsMicrotask: true,

  // scheduleMicrotask(fn) {},

  isPrimaryRenderer: true,

  getCurrentEventPriority() {
    console.log("getCurrentEventPriority");
    return DefaultEventPriority;
  },

  supportsMutation: true,

  // appendChild(parentInstance, child) {},

  appendChildToContainer(container, child) {
    container.child = child;

    console.log("appendChildToContainer: ", container);
  },

  // insertBefore(parentInstance, child, beforeChild) {},

  // insertInContainerBefore(container, child, beforeChild) {},

  // removeChild(parentInstance, child) {},

  // removeChildFromContainer(container, child) {},

  resetTextContent(instance) {
    console.log("resetTextContent");
  },

  // commitTextUpdate(textInstance, prevText, nextText) {},

  // commitMount(instance, type, props, internalHandle) {},

  // commitUpdate(
  //   instance,
  //   updatePayload,
  //   type,
  //   prevProps,
  //   nextProps,
  //   internalHandle
  // ) {},

  // hideInstance(instance) {},

  // hideTextInstance(textInstance) {},

  // unhideInstance(instance, props) {},

  // unhideTextInstance(textInstance, text) {},

  clearContainer(container) {
    console.log("clearContainer");
  },
};

module.exports = HostConfig;