import type { FaqItem, SupportChannel } from "@/portal/domain/support";

export type SupportInfoPort = {
  getSupportChannels: () => SupportChannel[];
  getFaqs: () => FaqItem[];
};
