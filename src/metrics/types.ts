export type ExperimentMessageMetrics = {
  totalMessages: number;
  toolCalls: number;
  thinking: number;
  agentMessages: number;
};

export type AgentMessageMetrics = {
  totalMessages: number;
  toolCalls: number;
  thinking: number;
  agenticLoops: number;
  messagesPerAgenticLoop: number;
  toolCallsPerAgenticLoop: number;
  thinkingPerAgenticLoop: number;
};
