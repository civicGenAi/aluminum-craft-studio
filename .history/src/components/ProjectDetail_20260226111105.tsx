import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Share2, MessageCircle, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

interface ProjectDetailProps {
  id: string;
}

// Extended portfolio data
const projectsData = {
  "modern-office-fitout": {
    title: "Modern Office Fit-out",
    category: "Commercial",
    location: "Dar es Salaam, Tanzania",
    date: "2024",
    description: "A complete office transformation with custom aluminum glass partitions and modern door systems. This commercial project showcased our expertise in creating flexible, professional workspaces.",
    fullDescription: "Transform your workspace into a modern, professional environment. We delivered a complete office fit-out featuring custom aluminum glass partitions that maximize natural light while maintaining privacy. The project included custom doors, frames, and integrated hardware systems designed for durability and elegance.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=60",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80",
    ],
    specs: [
      { label: "Material", value: "Aluminum & Tempered Glass" },
      { label: "Area Covered", value: "2,500 sq ft" },
      { label: "Duration", value: "6 weeks" },
      { label: "Workers", value: "12 skilled technicians" },
    ],
    testimonial: "AlumCraft transformed our office space with stunning glass partitions. The precision and professionalism were outstanding.",
    testimonialAuthor: "James Mollel, Business Manager",
    rating: 5,
    likes: 234,
    comments: 15,
  },
  "villa-window-installation": {
    title: "Villa Window Installation",
    category: "Residential",
    location: "Kigali, Rwanda",
    date: "2024",
    description: "Premium residential window installation featuring custom-designed frames that perfectly complement the villa's modern architecture.",
    fullDescription: "Elevate your home with premium window installations. Our custom-designed aluminum frames and high-performance glass provide superior insulation, security, and aesthetic appeal. Perfect for modern residential properties seeking luxury and functionality.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
    ],
    specs: [
      { label: "Material", value: "Anodized Aluminum" },
      { label: "Window Units", value: "24 custom frames" },
      { label: "Duration", value: "3 weeks" },
      { label: "Glass Type", value: "Low-E Double Glazed" },
    ],
    testimonial: "Every piece was custom-fitted perfectly with meticulous attention to detail and quality.",
    testimonialAuthor: "Amina Hassan, Homeowner",
    rating: 5,
    likes: 189,
    comments: 12,
  },
  "storefront-door-system": {
    title: "Storefront Door System",
    category: "Doors",
    location: "Arusha, Tanzania",
    date: "2023",
    description: "Professional commercial storefront doors with integrated security systems and modern glass design.",
    fullDescription: "Create an impressive storefront entrance with our professional door systems. Featuring advanced security hardware, weather-resistant seals, and stunning aluminum frames that attract customers and enhance brand image.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop&q=60",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop&q=80",
    ],
    specs: [
      { label: "Door Type", value: "Sliding Glass Doors" },
      { label: "Width", value: "12 ft (3.6 m)" },
      { label: "Duration", value: "2 weeks" },
      { label: "Hardware", value: "Commercial Grade" },
    ],
    testimonial: "Professional installation delivered on time with excellent quality materials.",
    testimonialAuthor: "David Kimaro, Retail Manager",
    rating: 5,
    likes: 156,
    comments: 8,
  },
};

type ProjectKey = keyof typeof projectsData;

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const project = projectsData[id as ProjectKey];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-accent-hover"
        >
          <ArrowLeft size={20} /> Project not found
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pt-20"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur z-40 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="font-heading font-bold text-lg">{project.title}</h1>
            <p className="text-xs text-muted-foreground">{project.location}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-secondary rounded-xl overflow-hidden mb-6"
        >
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentImageIndex ? "bg-primary w-6" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-6"
        >
          <button
            onClick={() => setLiked(!liked)}
            className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 py-3 rounded-lg transition-colors"
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} className={liked ? "text-destructive" : ""} />
            <span className="text-sm">{project.likes + (liked ? 1 : 0)}</span>
          </button>
          <button
            onClick={() => navigator.share?.({ title: project.title, url: window.location.href })}
            className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 py-3 rounded-lg transition-colors"
          >
            <Share2 size={20} />
            <span className="text-sm">Share</span>
          </button>
          <button
            onClick={() => document.getElementById("comments")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 py-3 rounded-lg transition-colors"
          >
            <MessageCircle size={20} />
            <span className="text-sm">{project.comments}</span>
          </button>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary rounded-xl p-4 md:p-6 mb-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{project.category}</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{project.location}</span>
              </div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: project.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">{project.fullDescription}</p>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
        >
          {project.specs.map((spec, i) => (
            <div key={i} className="bg-secondary rounded-lg p-3 md:p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
              <p className="font-bold text-sm md:text-base text-primary">{spec.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        {project.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-3 italic">"{project.testimonial}"</p>
            <p className="font-semibold text-sm text-primary">{project.testimonialAuthor}</p>
          </motion.div>
        )}

        {/* Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-secondary rounded-xl p-6 mb-6"
        >
          <h3 className="font-heading font-bold mb-4">Rate This Project</h3>
          <div className="flex gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setRating(i + 1)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={28}
                  className={i < rating ? "fill-primary text-primary" : "text-muted-foreground"}
                />
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-sm text-primary">Thank you for rating this project!</p>}
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          id="comments"
          className="bg-secondary rounded-xl p-6 mb-6"
        >
          <h3 className="font-heading font-bold mb-4">Leave a Comment</h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this project..."
            className="w-full bg-background border border-border rounded-lg p-3 mb-3 text-foreground text-sm resize-none"
            rows={3}
          />
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors text-sm font-semibold">
            Post Comment
          </button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center mb-8"
        >
          <Zap className="mx-auto mb-4 text-primary" size={32} />
          <h3 className="font-heading font-bold text-xl mb-2">Ready to Start Your Project?</h3>
          <p className="text-foreground/80 mb-6">Let's bring your vision to life with professional aluminum solutions.</p>
          <a
            href={buildWhatsAppLink(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent-hover transition-all"
          >
            Request This Service
          </a>
        </motion.div>

        {/* Featured Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="font-heading font-bold text-xl mb-6">Featured Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(projectsData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, proj]) => (
                <button
                  key={key}
                  onClick={() => window.location.href = `/project/${key}`}
                  className="group relative rounded-lg overflow-hidden cursor-pointer h-[200px]"
                >
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col justify-end p-4">
                    <p className="font-heading font-bold text-white">{proj.title}</p>
                    <p className="text-xs text-white/80">{proj.category}</p>
                  </div>
                </button>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
