## Pulsar configurations

You can manage Pulsar configurations through configuration files in the [`conf`](https://github.com/apache/pulsar/tree/master/conf) directory of a Pulsar installation.

- [BookKeeper](/@pulsar:version_reference@/config/reference-configuration-bookkeeper)
- [Broker](/@pulsar:version_reference@/config/reference-configuration-broker)
- [Client](/@pulsar:version_reference@/config/reference-configuration-client)
- [Log4j](/@pulsar:version_reference@/config/reference-configuration-log4j)
- [Log4j shell](/@pulsar:version_reference@/config/reference-configuration-log4j-shell)
- [Standalone](/@pulsar:version_reference@/config/reference-configuration-standalone)
- [WebSocket](/@pulsar:version_reference@/config/reference-configuration-websocket)
- [Pulsar proxy](/@pulsar:version_reference@/config/reference-configuration-pulsar-proxy)
- [ZooKeeper](/@pulsar:version_reference@/config/reference-configuration-zookeeper)

### Override client configurations

If you want to override the configurations of clients internal to brokers, websockets, and proxies, you can use the following prefix.

| Prefix        | Description                                                                                                                                                                                                                  |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| brokerClient_ | Configure **all** the Pulsar Clients and Pulsar Admin Clients of brokers, websockets, and proxies. These configurations are applied after hard-coded configurations and before the client configurations named in this site. |
| bookkeeper_   | Configure the broker's BookKeeper clients used by managed ledgers and the BookkeeperPackagesStorage bookkeeper client. Takes precedence over most other configuration values.                                                |

> Notes:
> * This override feature only applies to Pulsar 2.10.1 and later versions.
> * When running the function worker within the broker, you have to configure those clients by using the `functions_worker.yml` file. These prefixed configurations do not apply to any of those clients.

### Set specific configurations using Java system property

You can set specific configurations through Java properties.

| **Property**       | **Description**                                              |
| ------------------ | ------------------------------------------------------------ |
| pulsar.enableUring | Use `io_uring` instead of `epoll` as network IO mode. `-Dpulsar.enableUring=1` means this feature is enabled. |

## Broker load balancing configurations

Below is a brief summary of configurations for broker load balancing. 

For detailed descriptions of each configuration, see [Broker load balancing | Configurations](pathname:///reference/#/@pulsar:version_reference@/config/reference-configuration-broker).

> Note
> Configurations with an asterisk (*) are only available in the extensible load balancer.

### Broker load data

- loadBalancerReportUpdateMinIntervalMillis
- loadBalancerReportUpdateThresholdPercentage
- loadBalancerReportUpdateMaxIntervalMinutes
- loadBalancerBandwithInResourceWeight
- loadBalancerBandwithOutResourceWeight
- loadBalancerCPUResourceWeight
- loadBalancerMemoryResourceWeight
- loadBalancerDirectMemoryResourceWeight
- loadBalancerHistoryResourcePercentage
  
### TopK bundle load data

- loadBalancerReportUpdateMinIntervalMillis
- statsUpdateFrequencyInSecs
- loadBalancerMaxNumberOfBundlesInBundleLoadReport*


### Bundle-broker assignment

- loadBalancerAverageResourceUsageDifferenceThresholdPercentage

### Bundle ownership system topic (ServiceUnitStateChannel)

- loadBalancerServiceUnitStateTombstoneDelayTimeInSeconds*

### Bundle unloading

- loadBalancerEnabled
- loadBalancerSheddingEnabled
- loadBalancerSheddingIntervalMinutes
- loadBalancerSheddingGracePeriodMinutes
- loadBalancerBrokerOverloadedThresholdPercentage
- loadBalancerLoadSheddingStrategy. The default value is [org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder](https://github.com/apache/pulsar/blob/782e91fe327efe2c9c9107d6c679c2837d43935b/conf/broker.conf#L1324). Available values are:
  -  `org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder`
  -  `org.apache.pulsar.broker.loadbalance.impl.UniformLoadShedder`
  -  `org.apache.pulsar.broker.loadbalance.impl.OverloadShedder`
  -  `org.apache.pulsar.broker.loadbalance.extensions.scheduler.TransferShedder`
- loadBalancerTransferEnabled*
- loadBalancerBrokerLoadTargetStd*
- loadBalancerSheddingConditionHitCountThreshold*
- loadBalancerMaxNumberOfBrokerSheddingPerCycle*
- loadBalanceSheddingDelayInSeconds*
- loadBalancerBrokerLoadDataTTLInSeconds*

### Bundle splitting

- loadBalancerEnabled
- loadBalancerAutoBundleSplitEnabled
- defaultNamespaceBundleSplitAlgorithm
- loadBalancerNamespaceBundleMaxTopics
- loadBalancerNamespaceBundleMaxSessions
- loadBalancerNamespaceBundleMaxMsgRate
- loadBalancerNamespaceBundleMaxBandwidthMbytes
- loadBalancerNamespaceMaximumBundles
- loadBalancerSplitIntervalMinutes*
- loadBalancerNamespaceBundleSplitConditionHitCountThreshold*
- loadBalancerMaxNumberOfBundlesToSplitPerCycle*