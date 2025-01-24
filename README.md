# HR Toolkit

HR Toolkit is an AI-powered application designed to help users manage job descriptions efficiently. It allows users to create, evaluate, and find job descriptions using advanced AI tools.

## Features

- **Create Job Descriptions**: Upload files or create content from scratch to generate professional job descriptions.
- **Evaluate Job Descriptions**: Upload job descriptions for evaluation and receive insights and suggestions for improvement.
- **Find Job Descriptions**: Search and browse through a database of job descriptions and templates.
- **User-Friendly Interface**: Intuitive design with easy navigation and file upload capabilities.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Typed superset of JavaScript for better development experience.
- **OpenAI API**: Integration for AI-powered content generation and evaluation.
- **Mammoth.js**: Library for converting .docx files to HTML.

## Installation

To get started with the HR Toolkit, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/hr-toolkit.git
   cd hr-toolkit
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of the project and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- **Creating Job Descriptions**: Navigate to the "Create Descriptions" section, upload a file, or enter content directly into the editor.
- **Evaluating Job Descriptions**: Go to the "Evaluate" section and upload your job description for analysis.
- **Finding Job Descriptions**: Use the search functionality in the "Find" section to locate specific job descriptions.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to OpenAI for providing the API that powers the AI features in this application.
- Thanks to the contributors and the community for their support and feedback.
