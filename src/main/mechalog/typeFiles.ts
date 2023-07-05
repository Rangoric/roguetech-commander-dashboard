export const typeFiles = (files: { fileName: string; content: any }[]) => {
  return files.map(({ fileName, content }) => ({
    fileName,
    content,
    type: "None",
  }));
};
