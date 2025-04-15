export type Blog = {
    slug: string;
    title: string;
    subtext: string;
}

export const blogs: Blog[] = [
  {
    slug: "introduction-to-deep-learning",
    title: "Introduction to Deep Learning",
    subtext:
      "A beginner-friendly overview of deep learning concepts and applications.",
  },
  {
    slug: "cnn-architecture-explained",
    title: "CNN Architecture Explained",
    subtext:
      "Detailed breakdown of convolutional neural networks and their components.",
  },
  {
    slug: "transfer-learning-with-resnet",
    title: "Transfer Learning with ResNet",
    subtext:
      "Leverage pre-trained ResNet models to boost your image classification tasks.",
  },
  {
    slug: "colon-cancer-detection-using-ai",
    title: "Colon Cancer Detection Using AI",
    subtext:
      "Building deep learning models for early detection of colon cancer from histopathology images.",
  },
  {
    slug: "data-augmentation-strategies",
    title: "Data Augmentation Strategies",
    subtext:
      "Techniques to artificially expand datasets for more robust training.",
  },
  {
    slug: "model-evaluation-metrics",
    title: "Model Evaluation Metrics",
    subtext:
      "Understand precision, recall, F1-score, ROC-AUC, and other evaluation tools.",
  },
  {
    slug: "optimizing-hyperparameters",
    title: "Optimizing Hyperparameters",
    subtext:
      "How to tune model parameters for best performance using grid and random search.",
  },
  {
    slug: "tensorflow-vs-pytorch",
    title: "TensorFlow vs PyTorch",
    subtext:
      "Comparative analysis of the two most popular deep learning frameworks.",
  },
  {
    slug: "deploying-ml-models-to-production",
    title: "Deploying ML Models to Production",
    subtext:
      "Steps and tools to turn your ML model into a production-ready service.",
  },
  {
    slug: "explainable-ai-in-healthcare",
    title: "Explainable AI in Healthcare",
    subtext:
      "The importance of model transparency and interpretability in medical applications.",
  },
];
