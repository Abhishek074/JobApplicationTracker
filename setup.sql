--CREATE DATABASE JobTrackerDB;
--USE JobTrackerDB;
 
-- Users Table
CREATE TABLE Users (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Username NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARBINARY(MAX) NOT NULL,
    PasswordSalt VARBINARY(MAX) NOT NULL
);
 
-- Jobs Table
CREATE TABLE Jobs (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    JobId NVARCHAR(50) NOT NULL UNIQUE,  -- Added UNIQUE for FK reference
    Company NVARCHAR(100) NOT NULL,
    Position NVARCHAR(100) NOT NULL,
    Location NVARCHAR(100) NOT NULL,
    YearOfExperience NVARCHAR(10) NOT NULL,
    Timestamp DATETIME DEFAULT GETDATE()
);
  
-- Job Applications Table
CREATE TABLE JobApplications (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId UNIQUEIDENTIFIER NOT NULL,
    JobId NVARCHAR(50) NOT NULL,  -- Changed from UNIQUEIDENTIFIER to NVARCHAR(50) to match Jobs table
    Status NVARCHAR(50) NULL,  
    AppliedDate DATETIME NULL, 
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (JobId) REFERENCES Jobs(JobId) ON DELETE CASCADE
);

-- Insert Jobs Data
INSERT INTO Jobs (JobId, Company, Position, Location, YearOfExperience, Timestamp) VALUES
('2928200', 'Google', 'Software Engineer', 'San Francisco, CA', '0-2', GETDATE()),
('2928201', 'Amazon', 'Data Analyst', 'Seattle, WA', '2-4', GETDATE()),
('2928202', 'Microsoft', 'Cloud Engineer', 'Redmond, WA', '3-5', GETDATE()),
('2928203', 'Facebook', 'Backend Developer', 'Menlo Park, CA', '1-3', GETDATE()),
('2928204', 'Netflix', 'DevOps Engineer', 'Los Angeles, CA', '2-4', GETDATE()),
('2928205', 'Apple', 'iOS Developer', 'Cupertino, CA', '0-2', GETDATE()),
('2928206', 'IBM', 'AI Researcher', 'New York, NY', '4-6', GETDATE()),
('2928207', 'Tesla', 'Embedded Systems Engineer', 'Austin, TX', '3-5', GETDATE()),
('2928208', 'Uber', 'Android Developer', 'San Francisco, CA', '1-3', GETDATE()),
('2928209', 'Twitter', 'Frontend Developer', 'San Francisco, CA', '0-2', GETDATE()),
('2928210', 'LinkedIn', 'Full Stack Developer', 'Sunnyvale, CA', '2-4', GETDATE()),
('2928211', 'Salesforce', 'Security Engineer', 'San Francisco, CA', '3-5', GETDATE()),
('2928212', 'Oracle', 'Database Administrator', 'Redwood City, CA', '4-6', GETDATE()),
('2928213', 'Adobe', 'Machine Learning Engineer', 'San Jose, CA', '2-4', GETDATE()),
('2928214', 'Intel', 'Hardware Engineer', 'Santa Clara, CA', '3-5', GETDATE()),
('2928215', 'Cisco', 'Network Engineer', 'San Jose, CA', '2-4', GETDATE()),
('2928216', 'Spotify', 'Data Engineer', 'New York, NY', '1-3', GETDATE()),
('2928217', 'Snapchat', 'Software Tester', 'Santa Monica, CA', '0-2', GETDATE()),
('2928218', 'Dell', 'IT Support Engineer', 'Round Rock, TX', '2-4', GETDATE()),
('2928219', 'HP', 'Cloud Architect', 'Palo Alto, CA', '4-6', GETDATE()),
('2928220', 'Accenture', 'Business Analyst', 'Chicago, IL', '3-5', GETDATE()),
('2928221', 'Capgemini', 'AI Developer', 'Dallas, TX', '1-3', GETDATE()),
('2928222', 'Deloitte', 'Consultant', 'New York, NY', '2-4', GETDATE()),
('2928223', 'Goldman Sachs', 'Financial Data Scientist', 'New York, NY', '3-5', GETDATE()),
('2928224', 'Morgan Stanley', 'Cybersecurity Engineer', 'New York, NY', '4-6', GETDATE()),
('2928225', 'Walmart', 'Supply Chain Analyst', 'Bentonville, AR', '2-4', GETDATE()),
('2928226', 'Target', 'E-commerce Developer', 'Minneapolis, MN', '1-3', GETDATE()),
('2928227', 'Visa', 'Blockchain Developer', 'San Francisco, CA', '3-5', GETDATE()),
('2928228', 'Mastercard', 'Payment Systems Engineer', 'Purchase, NY', '2-4', GETDATE()),
('2928229', 'PayPal', 'Risk Analyst', 'San Jose, CA', '1-3', GETDATE()),
('2928230', 'Stripe', 'Backend Developer', 'San Francisco, CA', '0-2', GETDATE()),
('2928231', 'Square', 'Data Scientist', 'San Francisco, CA', '2-4', GETDATE()),
('2928232', 'Airbnb', 'Cloud Engineer', 'San Francisco, CA', '3-5', GETDATE()),
('2928233', 'Dropbox', 'Infrastructure Engineer', 'San Francisco, CA', '2-4', GETDATE()),
('2928234', 'Pinterest', 'Frontend Engineer', 'San Francisco, CA', '1-3', GETDATE()),
('2928235', 'Reddit', 'Machine Learning Engineer', 'San Francisco, CA', '4-6', GETDATE()),
('2928236', 'TikTok', 'Software Developer', 'Los Angeles, CA', '2-4', GETDATE()),
('2928237', 'YouTube', 'Video Streaming Engineer', 'San Bruno, CA', '3-5', GETDATE()),
('2928238', 'Sony', 'Game Developer', 'San Mateo, CA', '1-3', GETDATE()),
('2928239', 'Nintendo', 'Game Tester', 'Redmond, WA', '0-2', GETDATE()),
('2928240', 'EA Sports', 'Game Designer', 'Redwood City, CA', '2-4', GETDATE()),
('2928241', 'Boeing', 'Aerospace Engineer', 'Seattle, WA', '4-6', GETDATE()),
('2928242', 'SpaceX', 'Rocket Engineer', 'Hawthorne, CA', '3-5', GETDATE()),
('2928243', 'NASA', 'Astrophysicist', 'Washington, DC', '5-7', GETDATE()),
('2928244', 'Blue Origin', 'Software Engineer', 'Kent, WA', '2-4', GETDATE()),
('2928245', 'Lockheed Martin', 'AI Research Scientist', 'Bethesda, MD', '3-5', GETDATE()),
('2928246', 'General Electric', 'Mechanical Engineer', 'Boston, MA', '2-4', GETDATE()),
('2928247', 'Siemens', 'Electrical Engineer', 'Munich, Germany', '1-3', GETDATE()),
('2928248', 'Samsung', 'Hardware Engineer', 'Seoul, South Korea', '3-5', GETDATE()),
('2928249', 'LG Electronics', 'Software Developer', 'Seoul, South Korea', '2-4', GETDATE());

Select * from Users
Select * from JobApplications
Select * from Jobs