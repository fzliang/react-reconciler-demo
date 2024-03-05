const Reconciler = require("react-reconciler");

const {
  ConcurrentRoot: ConcurrentRootFlag,
} = require("react-reconciler/constants");

const HostConfig = require("./my-host-config");

const ReactReconcilerInst = Reconciler(HostConfig);

let rootContainer;
const RendererPublicAPI = {
  render(element, container, callback) {
    if (!rootContainer) {
      rootContainer = ReactReconcilerInst.createContainer(
        container,
        ConcurrentRootFlag
      );
    }

    ReactReconcilerInst.updateContainer(element, rootContainer, null, callback);

    return rootContainer;
  },
};

module.exports = RendererPublicAPI;
