import { IconScanEye, IconBrandGithub } from "@tabler/icons-react";

export default function ButtonGroup({ previewLink, sourceCodeLink }) {
  if (!sourceCodeLink) {
    return (
      <span className="isolate inline-flex rounded-md shadow-sm">
        <a
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold focus:z-10 bg-orange/90 text-blue focus:bg-orange group"
          href={previewLink}
          target="_blank"
        >
          <IconScanEye
            className="h-5 w-5 text-blue transition-all duration-150 group-hover:scale-110 inline"
            aria-hidden="true"
          />
          Preview
        </a>
      </span>
    );
  }
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <a
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md px-3 py-2 text-sm font-semibold focus:z-10 bg-orange/90 text-blue focus:bg-orange group"
        href={previewLink}
        target="_blank"
      >
        <IconScanEye
          className="h-5 w-5 text-blue transition-all duration-150 group-hover:scale-110 inline"
          aria-hidden="true"
        />
        Preview
      </a>
      <a
        type="button"
        className="group relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold focus:z-10 bg-orange/80 text-blue focus:bg-orange"
        href={sourceCodeLink}
        target="_blank"
      >
        <IconBrandGithub
          className="h-5 w-5 text-blue transition-all duration-150 group-hover:scale-110 inline mr-1"
          aria-hidden="true"
        />
        Source code
      </a>
    </span>
  );
}
