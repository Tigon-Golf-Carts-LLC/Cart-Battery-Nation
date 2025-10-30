import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMetaConfig } from "@/lib/meta-config";
import { useDocumentHead } from "@/hooks/use-document-head";
import { Settings, Facebook, Twitter, Search, CheckCircle, Copy, Eye } from "lucide-react";

const metaConfigSchema = z.object({
  siteName: z.string().min(1, "Site name is required"),
  defaultImage: z.string().url("Must be a valid URL").or(z.string().startsWith("/", "Must be a URL or path starting with /")),
  faviconPath: z.string().min(1, "Favicon path is required"),
  facebookPageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  twitterHandle: z.string().optional().or(z.literal("")),
  socialProfileUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  googleVerification: z.string().optional().or(z.literal("")),
  bingVerification: z.string().optional().or(z.literal("")),
  pinterestVerification: z.string().optional().or(z.literal("")),
  yandexVerification: z.string().optional().or(z.literal("")),
});

type MetaConfigFormValues = z.infer<typeof metaConfigSchema>;

export default function MetaSettings() {
  useDocumentHead({
    title: "SEO & Meta Tag Settings - Cart Battery Nation",
    description: "Configure SEO meta tags, social media sharing, and search engine verification for Cart Battery Nation.",
    pageType: "website"
  });

  const { config, updateConfig, resetConfig } = useMetaConfig();
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);

  const form = useForm<MetaConfigFormValues>({
    resolver: zodResolver(metaConfigSchema),
    defaultValues: config,
  });

  const onSubmit = (data: MetaConfigFormValues) => {
    updateConfig(data);
    toast({
      title: "Settings Saved",
      description: "Your meta tag configuration has been updated successfully.",
    });
  };

  const handleReset = () => {
    resetConfig();
    form.reset({
      siteName: 'Cart Battery Nation',
      defaultImage: '/cbn-logo.png',
      faviconPath: '/favicon.ico',
      facebookPageUrl: '',
      twitterHandle: '@CartBatteryNation',
      socialProfileUrl: '',
      googleVerification: '',
      bingVerification: '',
      pinterestVerification: '',
      yandexVerification: '',
    });
    toast({
      title: "Settings Reset",
      description: "Configuration has been reset to default values.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard.",
    });
  };

  const previewMetaTags = () => {
    const values = form.getValues();
    const exampleUrl = "https://cartbatterynation.com/products/golf-cart";
    const exampleImage = values.defaultImage.startsWith('http') 
      ? values.defaultImage 
      : `https://cartbatterynation.com${values.defaultImage}`;

    return `<!-- Open Graph Meta Tags -->
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Premium Golf Cart Batteries - ${values.siteName}" />
<meta property="og:description" content="Shop premium golf cart batteries direct from ${values.siteName}." />
<meta property="og:url" content="${exampleUrl}" />
<meta property="og:site_name" content="${values.siteName}" />
${values.facebookPageUrl ? `<meta property="article:publisher" content="${values.facebookPageUrl}" />` : ''}
<meta property="og:image" content="${exampleImage}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Premium Golf Cart Batteries - ${values.siteName}" />
<meta name="twitter:description" content="Shop premium golf cart batteries direct from ${values.siteName}." />
${values.twitterHandle ? `<meta name="twitter:site" content="${values.twitterHandle}" />` : ''}
<meta name="twitter:image" content="${exampleImage}" />

<!-- Search Engine Verification -->
${values.googleVerification ? `<meta name="google-site-verification" content="${values.googleVerification}" />` : ''}
${values.bingVerification ? `<meta name="msvalidate.01" content="${values.bingVerification}" />` : ''}
${values.pinterestVerification ? `<meta name="p:domain_verify" content="${values.pinterestVerification}" />` : ''}
${values.yandexVerification ? `<meta name="yandex-verification" content="${values.yandexVerification}" />` : ''}

<!-- Social Profile -->
${values.socialProfileUrl ? `<link rel="me" href="${values.socialProfileUrl}" />` : ''}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">SEO & Meta Tag Settings</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Configure dynamic meta tags for search engines and social media sharing across all pages.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Search className="h-4 w-4" />
                SEO Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Improve search engine visibility with proper meta tags and verification codes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                Social Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Control how your pages appear when shared on Facebook, Twitter, and other platforms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Auto-Applied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Changes apply automatically to all pages without modifying existing code.
              </p>
            </CardContent>
          </Card>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="site" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="site" data-testid="tab-site">Site Information</TabsTrigger>
                <TabsTrigger value="social" data-testid="tab-social">Social Media</TabsTrigger>
                <TabsTrigger value="verification" data-testid="tab-verification">Verification</TabsTrigger>
              </TabsList>

              <TabsContent value="site" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>
                      Configure your site name, default images, and favicon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="siteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Site Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Cart Battery Nation" 
                              data-testid="input-site-name"
                            />
                          </FormControl>
                          <FormDescription>
                            Your website name as it appears in search results and social shares.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="defaultImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Default Share Image</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="/cbn-logo.png or https://..." 
                              data-testid="input-default-image"
                            />
                          </FormControl>
                          <FormDescription>
                            Fallback image for social sharing (1200x630px recommended). Use absolute URL or path.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="faviconPath"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Favicon Path</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="/favicon.ico" 
                              data-testid="input-favicon-path"
                            />
                          </FormControl>
                          <FormDescription>
                            Path to your favicon file (typically /favicon.ico).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media Settings</CardTitle>
                    <CardDescription>
                      Configure your social media profiles and handles for rich social sharing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="facebookPageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facebook Page URL</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="https://facebook.com/cartbatterynation" 
                              data-testid="input-facebook-url"
                            />
                          </FormControl>
                          <FormDescription>
                            Your Facebook business page URL (used in article:publisher tag).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="twitterHandle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter Handle</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="@CartBatteryNation" 
                              data-testid="input-twitter-handle"
                            />
                          </FormControl>
                          <FormDescription>
                            Your Twitter username including the @ symbol (e.g., @YourBrand).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="socialProfileUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Social Profile URL (rel="me")</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="https://twitter.com/cartbatterynation" 
                              data-testid="input-social-profile"
                            />
                          </FormControl>
                          <FormDescription>
                            Primary social profile URL for identity verification (IndieWeb rel="me").
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="verification" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Search Engine Verification</CardTitle>
                    <CardDescription>
                      Add verification codes from search engines and platforms to verify site ownership.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="googleVerification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Google Site Verification</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="abc123def456ghi789..." 
                              data-testid="input-google-verification"
                            />
                          </FormControl>
                          <FormDescription>
                            Get this from <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Search Console</a>.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bingVerification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bing Site Verification</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="xyz789ghi012jkl345..." 
                              data-testid="input-bing-verification"
                            />
                          </FormControl>
                          <FormDescription>
                            Get this from <a href="https://www.bing.com/webmasters" target="_blank" rel="noopener noreferrer" className="text-primary underline">Bing Webmaster Tools</a>.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pinterestVerification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pinterest Domain Verification</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="mno678pqr901stu234..." 
                              data-testid="input-pinterest-verification"
                            />
                          </FormControl>
                          <FormDescription>
                            Get this from <a href="https://www.pinterest.com/settings/claim" target="_blank" rel="noopener noreferrer" className="text-primary underline">Pinterest Business</a>.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yandexVerification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Yandex Verification</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="vwx456yza789bcd012..." 
                              data-testid="input-yandex-verification"
                            />
                          </FormControl>
                          <FormDescription>
                            Get this from <a href="https://webmaster.yandex.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">Yandex Webmaster</a>.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Preview Generated Meta Tags
                </CardTitle>
                <CardDescription>
                  See how your configuration will appear as HTML meta tags (example page).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowPreview(!showPreview)}
                    data-testid="button-toggle-preview"
                  >
                    {showPreview ? "Hide" : "Show"} Preview
                  </Button>
                  {showPreview && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(previewMetaTags())}
                      data-testid="button-copy-preview"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Code
                    </Button>
                  )}
                </div>
                {showPreview && (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{previewMetaTags()}</code>
                  </pre>
                )}
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button type="submit" data-testid="button-save-settings">
                <CheckCircle className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleReset}
                data-testid="button-reset-settings"
              >
                Reset to Defaults
              </Button>
            </div>
          </form>
        </Form>

        <Card className="mt-8 border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Badge variant="outline" className="bg-yellow-500/10">Important</Badge>
              How This Works
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>✅ <strong>Safe Implementation:</strong> This system only adds new meta tags dynamically. No existing code is modified or removed.</p>
            <p>✅ <strong>Auto-Applied:</strong> Changes apply automatically to all pages based on their content.</p>
            <p>✅ <strong>Page-Specific:</strong> Each page can override defaults with specific titles, descriptions, and images.</p>
            <p>✅ <strong>Persistent Storage:</strong> Settings are saved in your browser and persist across sessions.</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
