INSERT INTO category(name)
VALUES ('web'),
       ('app'),
       ('3danimation'),
       ('graphicdesign'),
       ('photo');

INSERT INTO tag(name)
VALUES ('react'),
       ('Jobs & Recruitment'),
       ('Bank'),
       ('Shopping'),
       ('Medical'),
       ('Branding'),
       ('Blog'),
       ('Magazine'),
       ('Templates'),
       ('colorful'),
       ('simple'),
       ('Animation');
       

-- INSERT INTO member(name, email, member_role, award, location, job, skill, career, member_status, com_info, refresh_token)
-- VALUES ('name', 'djWJrn1@gmail.com', 'CLIENT','award','location','job','skill','career','MEMBER_ACTIVE', 'cominfo','refreshtoken');
--
-- INSERT INTO tag()
-- VALUES ();

-- INSERT INTO portfolio(created_at, content, explains, status, title, view, category_id, member_id)
-- VALUES ('2023-07-20 17:01:39.017297','content<br><img src="https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/29619c04-a739-4e3e-b1c4-9f8453aa4f40.png"><br>wkfskdhskdy',
--         'explains explains','ACTIVE', 'title is title', 0, 1, 1),
--        ('2023-07-20 17:02:39.017297','content<br><img src="https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/29619c04-a739-4e3e-b1c4-9f8453aa4f40.png"><br>wkfskdhskdy',
--         'explains explains2','ACTIVE', 'title is title', 0, 1, 1),
--        ('2023-07-20 17:03:39.017297','content<br><img src="https://portfolly-picture.s3.ap-northeast-2.amazonaws.com/29619c04-a739-4e3e-b1c4-9f8453aa4f40.png"><br>wkfskdhskdy',
--         'explains explains','ACTIVE', 'title is title', 0, 1, 1);
INSERT INTO member (name, email, image_url, member_role, location, com_info, job, career, award, skill, refresh_token, member_status)
VALUES ('John', 'john@example.com', 'http://example.com/image.jpg', 'CLIENT', 'New York', 'Some company info', 'Software Engineer', '5 years', 'Received XYZ award', 'Java, Python, SQL', 'some_refresh_token', 'MEMBER_ACTIVE');
