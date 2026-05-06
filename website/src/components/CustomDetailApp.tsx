import React from 'react';
import { Header } from './Header';
import { ArrowLeft, Clock, Settings2, Copy, Check, Terminal, Tag } from 'lucide-react';
import { ui } from '../i18n/utils';
import { cn } from '../lib/utils';
import { sitePath } from '../lib/routes';
import { FileViewer, type DownloadFile } from './FileViewer';
import { DownloadSection } from './DownloadSection';
import { CustomAiWriteSection } from './CustomAiWriteSection';

type CustomDetailData = {
  id: string;
  title?: string;
  description?: string;
  author?: string;
  status?: string;
  updatedAt?: string;
  version?: string;
  tags?: string[];
  downloadFiles?: DownloadFile[];
};

// In a real app, this data would come from the astro page props (fetched from getCollection)
export function CustomDetailApp({ customId, customData, lang = 'zh' }: { customId: string, customData: CustomDetailData, lang?: 'zh' | 'en' }) {
  const [currentLang, setCurrentLang] = React.useState(lang);
  const [isCopied1, setIsCopied1] = React.useState(false);
  const [isCopied2, setIsCopied2] = React.useState(false);

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'zh') {
      setCurrentLang(savedLang);
    }
  }, []);

  if (!isClient) return <div className="min-h-screen" />;

  const toggleLang = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setCurrentLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: keyof typeof ui['zh']) => ui[currentLang][key as keyof typeof ui['zh']] || key;

  const handleCopy1 = () => {
    navigator.clipboard.writeText(`git clone https://github.com/MaaXYZ/MaaHub.git --depth=1`);
    setIsCopied1(true);
    setTimeout(() => setIsCopied1(false), 2000);
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(`cp -r MaaHub/Storage/customs/${customData.author}/${customData.id.split('/')[1]} ./your_agent_customs/`);
    setIsCopied2(true);
    setTimeout(() => setIsCopied2(false), 2000);
  };

  const packageName = customData.id.split('/')[1] || customData.id;

  return (
    <>
      <Header lang={currentLang} toggleLang={toggleLang} />
      
      <main className="flex-1 bg-muted/10 pb-20">
        {/* Breadcrumb & Header Banner */}
        <div className="bg-background border-b">
          <div className="container mx-auto px-4 py-8 md:px-8">
            <a href={sitePath('/customs')} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </a>
            
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <Settings2 className="h-6 w-6" />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight">{customData.title}</h1>
                  <span className={cn(
                    "ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    customData.status === 'stable' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                  )}>
                    {customData.status}
                  </span>
                </div>
                
                <p className="text-xl text-muted-foreground mb-4 max-w-3xl">
                  {customData.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold uppercase">
                      {customData.author?.charAt(0) || '?'}
                    </div>
                    <span className="font-medium text-foreground">{customData.author || 'Unknown'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{t('common.updated')} {customData.updatedAt}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span>v{customData.version || '1.0.0'}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {customData.tags?.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-3 mt-4 md:mt-0">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="font-medium mb-3 flex items-center text-sm">
                    <Terminal className="mr-2 h-4 w-4 text-muted-foreground" />
                    {t('skill.install')}
                  </h3>
                  <div className="relative mb-2">
                    <pre className="overflow-x-auto rounded bg-muted p-3 text-xs font-mono whitespace-pre-wrap break-all pr-10">
                      <code>{`git clone https://github.com/MaaXYZ/MaaHub.git --depth=1`}</code>
                    </pre>
                    <button 
                      onClick={handleCopy1}
                      className="absolute right-2 top-2 rounded bg-background p-1.5 text-muted-foreground hover:text-foreground border shadow-sm transition-colors"
                      title="Copy clone command"
                    >
                      {isCopied1 ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="overflow-x-auto rounded bg-muted p-3 text-xs font-mono whitespace-pre-wrap break-all pr-10">
                      <code>{`cp -r MaaHub/Storage/customs/${customData.author}/${customData.id.split('/')[1]} ./your_agent_customs/`}</code>
                    </pre>
                    <button 
                      onClick={handleCopy2}
                      className="absolute right-2 top-2 rounded bg-background p-1.5 text-muted-foreground hover:text-foreground border shadow-sm transition-colors"
                      title="Copy copy command"
                    >
                      {isCopied2 ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="container mx-auto px-4 py-8 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              <FileViewer files={customData.downloadFiles} emptyLabel={t('skill.files.empty')} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <CustomAiWriteSection customData={customData} lang={currentLang} />
              <DownloadSection files={customData.downloadFiles} packageName={packageName} lang={currentLang} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
