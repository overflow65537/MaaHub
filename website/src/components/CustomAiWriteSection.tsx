import React from 'react';
import { Bot, Check, Copy } from 'lucide-react';
import type { DownloadFile } from './FileViewer';
import { ui } from '../i18n/utils';

type CustomAiWriteSectionProps = {
  customData: {
    id: string;
    title?: string;
    description?: string;
    author?: string;
    tags?: string[];
    downloadFiles?: DownloadFile[];
  };
  lang: 'zh' | 'en';
};

function buildPrompt(
  customData: CustomAiWriteSectionProps['customData'],
  lang: 'zh' | 'en'
) {
  const files = customData.downloadFiles ?? [];
  const lines =
    lang === 'zh'
      ? [
          '# 任务说明',
          '请你参考下面这个 MaaFramework custom 模块的完整内容，编写一个“同款” custom。',
          '要求：',
          '1. 先理解该 custom 的目标、结构、入口文件、依赖与实现方式。',
          '2. 保持整体范式、目录组织与代码风格的一致性。',
          '3. 如果需要做适配或改动，明确说明改动点及原因。',
          '4. 输出完整结果时，优先给出完整文件内容，而不是只给片段。',
          '5. 如有需要，请优先通过本地代码库或已安装的 module（例如 py、go 等）查询真实 API 与实现细节，不要凭空猜测。',
          '6. 若当前环境中存在可用的 MaaFramework custom skill，请优先加载并遵循其约束。',
          '7. 可参考 MaaFramework custom 官方示例：https://github.com/MaaXYZ/MaaFramework/tree/main/sample',
          '',
          '# 项目信息',
          `- ID: ${customData.id}`,
          `- 标题: ${customData.title ?? '未命名 custom'}`,
          `- 作者: ${customData.author ?? 'Unknown'}`,
          `- 描述: ${customData.description ?? '暂无描述'}`,
          `- 标签: ${customData.tags?.join(', ') || '无'}`,
          '',
          '# 文件清单',
          ...files.map((file) => `- ${file.path}`),
          '',
          '# 文件正文',
          ...files.flatMap((file) => [
            `## FILE: ${file.path}`,
            '--- FILE START ---',
            file.content,
            '--- FILE END ---',
            '',
          ]),
        ]
      : [
          '# Task',
          'Please use the following complete MaaFramework custom as a reference and write a similar custom.',
          'Requirements:',
          '1. Understand the goal, structure, entry files, dependencies, and implementation approach first.',
          '2. Keep the overall paradigm, directory layout, and coding style aligned.',
          '3. If you need to adapt or change anything, explain the changes and why they are needed.',
          '4. When producing the result, prefer complete file contents instead of fragments.',
          '5. When needed, inspect the local codebase or installed modules (for example py, go, etc.) to verify real APIs and implementation details instead of guessing.',
          '6. If a MaaFramework custom skill is available in the current environment, load it first and follow its constraints.',
          '7. You can refer to the official MaaFramework custom examples: https://github.com/MaaXYZ/MaaFramework/tree/main/sample',
          '',
          '# Project Info',
          `- ID: ${customData.id}`,
          `- Title: ${customData.title ?? 'Unnamed custom'}`,
          `- Author: ${customData.author ?? 'Unknown'}`,
          `- Description: ${customData.description ?? 'No description'}`,
          `- Tags: ${customData.tags?.join(', ') || 'None'}`,
          '',
          '# File List',
          ...files.map((file) => `- ${file.path}`),
          '',
          '# File Contents',
          ...files.flatMap((file) => [
            `## FILE: ${file.path}`,
            '--- FILE START ---',
            file.content,
            '--- FILE END ---',
            '',
          ]),
        ];

  return lines.join('\n').trim();
}

export function CustomAiWriteSection({
  customData,
  lang,
}: CustomAiWriteSectionProps) {
  const [copied, setCopied] = React.useState(false);
  const [copyError, setCopyError] = React.useState<string | null>(null);
  const t = (key: keyof typeof ui['zh']) =>
    ui[lang][key as keyof typeof ui['zh']] || key;

  const hasFiles = (customData.downloadFiles?.length ?? 0) > 0;

  const handleCopy = async () => {
    if (!hasFiles) {
      setCopyError(t('custom.aiWrite.empty'));
      return;
    }

    try {
      await navigator.clipboard.writeText(buildPrompt(customData, lang));
      setCopied(true);
      setCopyError(null);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy AI write prompt', error);
      setCopyError(t('custom.aiWrite.failed'));
    }
  };

  return (
    <div className="rounded-xl border bg-card shadow-sm p-5">
      <h3 className="font-bold mb-3 flex items-center">
        <Bot className="mr-2 h-4 w-4 text-muted-foreground" />
        {t('custom.aiWrite.title')}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {t('custom.aiWrite.desc')}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!hasFiles}
        className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
      >
        {copied ? (
          <>
            <Check className="mr-2 h-4 w-4 text-green-500" />
            {t('custom.aiWrite.copied')}
          </>
        ) : (
          <>
            <Copy className="mr-2 h-4 w-4" />
            {t('custom.aiWrite.action')}
          </>
        )}
      </button>
      {copyError ? (
        <p className="text-xs text-red-500 mt-2">{copyError}</p>
      ) : null}
    </div>
  );
}
